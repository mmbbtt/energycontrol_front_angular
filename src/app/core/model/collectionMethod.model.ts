export enum ECollectionMethod
{
    REAL = 1,
    SIMULATED,
    UNKNOWN
}

export interface ICollectionMethod
{
    value: ECollectionMethod;
    displayValue: string;
}