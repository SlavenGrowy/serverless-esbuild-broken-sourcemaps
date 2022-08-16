import { IsBoolean, IsEmail, IsEnum, IsHexColor, IsInt, IsSemVer, Max, Min } from 'class-validator'
import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase, Context } from 'aws-lambda'
import { Body, Ctx, Event, Handler, HttpError, ok, Paths, Queries } from 'aws-lambda-handyman'

export enum DeviceType {
  RELATION = 'RELATION',
  ROBOT = 'ROBOT',
  ELEVATOR = 'ELEVATOR',
  FARM = 'FARM',
  CONVEYOR = 'CONVEYOR',
  EXTERNALSLOT = 'EXTERNALSLOT',
}

class BodyType {
  @IsEmail()
  email: string

  @IsHexColor()
  hexColor: string

  @IsInt()
  integerNumber: number

  optionalParam?: string
}

class PathsType {
  @IsInt()
  farmId: number

  @IsInt()
  deviceId: number

  @IsEnum(DeviceType)
  deviceType: DeviceType
}

class QueriesType {
  @IsSemVer()
  version: string

  @IsBoolean()
  pumpOne: boolean

  @IsInt()
  @Min(0)
  @Max(100)
  robotSpeed: number
}

class DecoratedHandler {

  @Handler()
  static async handle(@Event() evt: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>,
                      @Ctx() ctx: Context,
                      @Body() body: BodyType,
                      @Paths() paths: PathsType,
                      @Queries() queries: QueriesType) {
    throw new HttpError('Oopsie Doopsie 🐸', 501)
    return ok({ body, paths, queries, evt, ctx })
  }

}

export const handler = DecoratedHandler.handle
