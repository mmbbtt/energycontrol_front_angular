export enum ESourceType
{
    Bill = 1,
    ConsumptionMeter,
    DistributionCompany,
    Other
}

export class ESourceTypeConverter
{
    static valueToString(value: ESourceType): string
    {
        var sValue: string = "Other";

        switch(value)
        {
            case ESourceType.Bill:
                sValue = "Bill";
                break;
            case ESourceType.ConsumptionMeter:
                sValue = "ConsumptionMeter";
                break;
            case ESourceType.DistributionCompany:
                sValue = "DistributionCompany";
                break;
        }

        return sValue;
    }

    static stringToValue(sValue: string): ESourceType
    {
        var value: ESourceType  = ESourceType.Other;

        if(sValue != null)
        {
            switch(sValue.toUpperCase())
            {
                case "Bill".toUpperCase():
                    value = ESourceType.Bill;
                    break;
                case "ConsumptionMeter".toUpperCase():
                    value = ESourceType.ConsumptionMeter;
                    break;
                case "DistributionCompany".toUpperCase():
                    value = ESourceType.DistributionCompany;
                    break;
            }
        }
        return value;
    }
}