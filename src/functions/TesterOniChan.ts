import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase } from 'aws-lambda'
import { z, ZodError } from 'zod'


export enum DeviceType {
  RELATION = 'RELATION',
  ROBOT = 'ROBOT',
  ELEVATOR = 'ELEVATOR',
  FARM = 'FARM',
  CONVEYOR = 'CONVEYOR',
  EXTERNALSLOT = 'EXTERNALSLOT',
}


const GetDeviceDetailsParamsSchema = z.object({
  farmId: z.number().int(),
  deviceId: z.number().int(),
  deviceType: z.nativeEnum(DeviceType)
})


export const handler = async (event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>) => {
  try {
    console.log('xd123 slavi:) 🚀123')
    const { pathParameters } = event

    const parse = GetDeviceDetailsParamsSchema.parse(pathParameters)

    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 200,
      body: JSON.stringify({ message: 'slavi' })
    }

  } catch (e) {
    if (e instanceof ZodError)
      console.log('ZodError', e)
  }
}


console.log('xd123')



