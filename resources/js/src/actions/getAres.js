import axios from "axios";
import * as txml from "txml/dist/txml";

const getAres = async (ico) => {
    try {
        const url_ares = `/api/ares/${ico}`;
        const response = await axios.get(url_ares);
        const data = txml.simplify(txml.parse(response.data));

        console.log(data);

        //example to get data from response: Name of company
        //console.log(data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:OF`]);

        // -- ICO -->
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ICO`]);

        // //DIC:
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:DIC`]);

        // // Company name
        // console.log(response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:OF`]);

        // Company address_street name
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:NU`]
        // );

        // // Company address_building number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:CD`]
        // );

        // // Company address_orientation number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:CO`]
        // );

        // Company address_PSC
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:PSC`]
        // );

        // Company address_City - not ready yet
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][`D:PSC`]
        // );

        // Registered at Trade court
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][`D:SZ`][
        //     `D:SD`
        //   ][`D:T`]
        // );

        // Registered at Trade court_file number
        // console.log(
        //   response[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][`D:SZ`][
        //     `D:OV`
        //   ]
        // );
        return {
            name: data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:OF`],
            reg_number:
                data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ICO`],
            reg_number_EU:
                data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:DIC`],
            reg_type_court:
                data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][
                    `D:SZ`
                ][`D:SD`][`D:T`],
            reg_type_file:
                data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:ROR`][
                    `D:SZ`
                ][`D:OV`],
            address: {
                city: data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][
                    `D:AA`
                ][`D:N`],
                street_name:
                    data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][
                        `D:NU`
                    ],
                house_number:
                    data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][
                        `D:CD`
                    ],
                house_orient:
                    data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][
                        `D:CO`
                    ],
                postal_code:
                    data[`are:Ares_odpovedi`][`are:Odpoved`][`D:VBAS`][`D:AA`][
                        `D:PSC`
                    ],
            },
        };
    } catch (error) {
        console.log(error); // information about the error
        console.log(error.response); // the response object from the failed request
        return null;
    }
};

export default getAres;
