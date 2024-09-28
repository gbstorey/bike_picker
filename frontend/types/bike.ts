import { Frame } from "./parts/frame";

export type Bike = {
    _id: string;
    name: string;
    description: string;
    components: {
        frame: Frame | undefined
    }
}