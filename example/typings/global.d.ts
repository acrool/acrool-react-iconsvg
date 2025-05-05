declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        ActiveXObject: string;
        dataLayer: any[];
        pushMessage: (action: string, data: { [key: string]: any }) => void;
    }

}


// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
