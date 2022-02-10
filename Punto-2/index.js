// JSON 
let values =  {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}
// JSON
let json = { 
    data: {
        BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        },
        LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        }
    }
}
//Change before
function JSONTransform() {
    const finalJSON = {};
    const operation = Object.keys(json.data);
    operation.forEach((item) => {
        return (finalJSON[item] = {
            limit: json.data[item].limit,
            over: values[json.data[item].over_carrier_service_id],
            under: values[json.data[item].under_carrier_service_id],
        });
    });
    let JSONDOM = JSON.stringify(finalJSON);
    console.log(finalJSON)
    return JSONDOM;
}
document.getElementById("main").innerHTML = JSONTransform();