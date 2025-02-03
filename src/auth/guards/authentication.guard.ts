import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AccessTokenGuard } from './access-token.guard';
import { AuthType } from '../enums/auth-type';
import { AUTH_TYPE_KEY } from '../constants/auth.constants';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  private static readonly defaultAuthType = AuthType.Bearer;

  private readonly authTypeGuardMap: Record<AuthType, CanActivate | CanActivate[]> = {
    [AuthType.Bearer]: this.accessTokenGuard,
    [AuthType.none]: { canActivate: () => true }
  }
  constructor(private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard
  ) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const authTypes = this.reflector.getAllAndOverride(AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ?? [AuthenticationGuard.defaultAuthType]
    const guards = authTypes.map((type) => this.authTypeGuardMap[type]).flat()
    const error = new UnauthorizedException()

    for (const instance of guards) {
      const canActivate = await Promise.resolve(

        instance.canActivate(context)
      ).catch((error) => {
        eror: error;
      })

      if (canActivate) {
        return true;
      }
    }
    throw error;
  }
}
