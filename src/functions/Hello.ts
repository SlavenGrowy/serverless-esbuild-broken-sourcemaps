import { ok } from "aws-lambda-handyman"
import { IsInt } from 'class-validator';

class ToValidate {
    @IsInt()
    myNum: number
}

export const handler = async (evt) => {
    console.log(evt)
    const {name} = evt.pathParameters
    return ok({name})
}
