

type OmitType = {
    name: string;
    age: number;
}


const omitObject:Omit <OmitType,"age"> = {
    name: "Ashwin",
}

