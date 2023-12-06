export type ILocation = {
    country?: string,
    state?: string,
    city?: string,
    type?: string,
    coordinates?: any[]
}

export type ISelectProps = {
    placeHolder?: string,
    options: any[],
    isMulti?: boolean,
    isSearchable?: boolean,
    optionName: string,
    onChange: (a: string) => void
}