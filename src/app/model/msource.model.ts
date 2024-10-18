import { ESourceType, ESourceTypeConverter } from "./sourcetype.model";

export class MSource
{
    code: string = "";
    description: string = "";
    type: ESourceType = ESourceType.Other;
    
    
    constructor(code: string, description: string, type: ESourceType)
    {
        this.code = code;
        this.description = description;
        this.type = type;
    }

    getTypeAsString(): string
    {
        return ESourceTypeConverter.valueToString(this.type);
    }
}