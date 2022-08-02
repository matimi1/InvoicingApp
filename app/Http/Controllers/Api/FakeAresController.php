<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FakeAresController extends Controller
{
    //returns json format of real ARES response from https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=27074358
    public function fakeAres()
    {
        $fakeResponse = '{
            "are:Ares_odpovedi": {
                "are:Odpoved": {
                "D:PID": "0",
                "D:VH": {
                    "D:K": "1",
                    "_attributes": {}
                },
                "D:PZA": "1",
                "D:UVOD": {
                    "D:ND": "Výpis z dat Registru ARES - aktuální stav ke dni 2022-07-08",
                    "D:ADB": "2022-07-08",
                    "D:DVY": "2022-07-10",
                    "D:CAS": "11:36:10",
                    "D:Typ_odkazu": "0",
                    "_attributes": {}
                },
                "D:VBAS": {
                    "D:ICO": "27074358",
                    "D:DIC": "CZ27074358",
                    "D:OF": "Asseco Central Europe, a.s.",
                    "D:DV": "2003-08-06",
                    "D:PF": {
                    "D:KPF": "121",
                    "D:NPF": "Akciová společnost",
                    "_attributes": {
                        "zdroj": "OR"
                    }
                    },
                    "D:AD": {
                    "D:UC": "Budějovická 778",
                    "D:PB": "14000 Praha",
                    "_attributes": {
                        "zdroj": "ARES"
                    }
                    },
                    "D:AA": {
                    "D:IDA": "212255510",
                    "D:KS": "203",
                    "D:NS": "Česká republika",
                    "D:N": "Praha",
                    "D:NCO": "Michle",
                    "D:NMC": "Praha 4",
                    "D:NU": "Budějovická",
                    "D:CD": "778",
                    "D:TCD": "1",
                    "D:CO": "3a",
                    "D:PSC": "14000",
                    "D:AU": {
                        "U:KOL": "19",
                        "U:KK": "19",
                        "U:KOK": "3100",
                        "U:KO": "554782",
                        "U:KPO": "43",
                        "U:KN": "43",
                        "U:KCO": "490130",
                        "U:KMC": "500119",
                        "U:PSC": "14000",
                        "U:KUL": "444375",
                        "U:CD": "778",
                        "U:TCD": "1",
                        "U:CO": "3",
                        "U:PCO": "a",
                        "U:KA": "41405609",
                        "U:KOB": "21770794",
                        "_attributes": {}
                    },
                    "_attributes": {
                        "zdroj": "ARES"
                    }
                    },
                    "D:PSU": "NAAANANNNNANNNNNNNNNPNNNANNNNN",
                    "D:ROR": {
                    "D:SZ": {
                        "D:SD": {
                        "D:K": "1",
                        "D:T": "Městský soud v Praze",
                        "_attributes": {}
                        },
                        "D:OV": "B 8525",
                        "_attributes": {}
                    },
                    "D:SOR": {
                        "D:SSU": "Aktivní",
                        "D:KKZ": {
                        "D:K": "0",
                        "_attributes": {}
                        },
                        "D:VY": {
                        "D:K": "0",
                        "_attributes": {}
                        },
                        "D:ZAM": {
                        "D:K": "0",
                        "_attributes": {}
                        },
                        "D:LI": {
                        "D:K": "0",
                        "_attributes": {}
                        },
                        "_attributes": {}
                    },
                    "_attributes": {}
                    },
                    "D:RRZ": {
                    "D:ZU": {
                        "D:KZU": "310004",
                        "D:NZU": "Úřad městské části Praha 4",
                        "_attributes": {}
                    },
                    "D:FU": {
                        "D:KFU": "4",
                        "D:NFU": "Praha 4",
                        "_attributes": {}
                    },
                    "_attributes": {}
                    },
                    "D:KPP": "250 - 499 zaměstnanců",
                    "D:Nace": {
                    "D:NACE": [
                        "181",
                        "261",
                        "26300",
                        "43210",
                        "461",
                        "46900",
                        "47",
                        "52290",
                        "5590",
                        "61",
                        "620",
                        "63",
                        "6820",
                        "69200",
                        "711",
                        "7120",
                        "73120",
                        "73200",
                        "74",
                        "74300",
                        "80",
                        "80200",
                        "8559"
                    ],
                    "_attributes": {}
                    },
                    "D:PPI": {
                    "D:PP": [
                        {
                        "D:T": [
                            " Činnost účetních poradců, vedení účetnictví, vedení daňové evidence ",
                            " pronájem nemovitostí, bytů a nebytových prostor s poskytováním jen základních služeb zajišťujících řádný provoz nemovitostí, bytů a nebytových prostor ",
                            " Montáž, opravy, revize a zkoušky elektrických zařízení ",
                            " Výroba, obchod a služby neuvedené v přílohách 1 až 3 živnostenského zákona ",
                            " Výroba, instalace, opravy elektrických strojů a přístrojů, elektronických a telekomunikačních zařízení ",
                            " poskytování technických služeb k ochraně majetku a osob "
                        ],
                        "_attributes": {
                            "zdroj": "OR"
                        }
                        },
                        {
                        "D:T": [
                            "Výroba, instalace, opravy elektrických strojů a přístrojů, elektronických a telekomunikačních zařízení",
                            "Poskytování technických služeb k ochraně majetku a osob",
                            "Výroba, obchod a služby neuvedené v přílohách 1 až 3 živnostenského zákona",
                            "Činnost účetních poradců, vedení účetnictví, vedení daňové evidence",
                            "Montáž, opravy, revize a zkoušky elektrických zařízení"
                        ],
                        "_attributes": {
                            "zdroj": "RZP"
                        }
                        }
                    ],
                    "_attributes": {}
                    },
                    "D:Obory_cinnosti": {
                    "D:Obor_cinnosti": [
                        {
                        "D:K": "Z01014",
                        "D:T": "Vydavatelské činnosti, polygrafická výroba, knihařské a kopírovací práce",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01047",
                        "D:T": "Zprostředkování obchodu a služeb",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01048",
                        "D:T": "Velkoobchod a maloobchod",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01052",
                        "D:T": "Skladování, balení zboží, manipulace s nákladem a technické činnosti v dopravě",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01053",
                        "D:T": "Zasilatelství a zastupování v celním řízení",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01055",
                        "D:T": "Ubytovací služby",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01056",
                        "D:T": "Poskytování software, poradenství v oblasti informačních technologií, zpracování dat, hostingové a související činnosti a webové portály",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01060",
                        "D:T": "Poradenská a konzultační činnost, zpracování odborných studií a posudků",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01062",
                        "D:T": "Příprava a vypracování technických návrhů, grafické a kresličské práce",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01063",
                        "D:T": "Projektování elektrických zařízení",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01064",
                        "D:T": "Výzkum a vývoj v oblasti přírodních a technických věd nebo společenských věd",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01065",
                        "D:T": "Testování, měření, analýzy a kontroly",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01066",
                        "D:T": "Reklamní činnost, marketing, mediální zastoupení",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01070",
                        "D:T": "Služby v oblasti administrativní správy a služby organizačně hospodářské povahy",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01072",
                        "D:T": "Mimoškolní výchova a vzdělávání, pořádání kurzů, školení, včetně lektorské činnosti",
                        "_attributes": {}
                        },
                        {
                        "D:K": "Z01080",
                        "D:T": "Výroba, obchod a služby jinde nezařazené",
                        "_attributes": {}
                        }
                    ],
                    "_attributes": {}
                    },
                    "_attributes": {}
                },
                "_attributes": {}
                },
                "_attributes": {
                "xmlns:are": "http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/ares/ares_answer_basic/v_1.0.3",
                "xmlns:D": "http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/ares/ares_datatypes/v_1.0.3",
                "xmlns:U": "http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/uvis_datatypes/v_1.0.3",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "odpoved_datum_cas": "2022-07-10T11:36:10",
                "odpoved_pocet": "1",
                "odpoved_typ": "Basic",
                "vystup_format": "XML",
                "xslt": "klient",
                "validation_XSLT": "http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/ares/ares_odpovedi.xsl",
                "xsi:schemaLocation": "http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/ares/ares_answer_basic/v_1.0.3 http://wwwinfo.mfcr.cz/ares/xml_doc/schemas/ares/ares_answer_basic/v_1.0.3/ares_answer_basic_v_1.0.3.xsd",
                "Id": "ares"
                }
            }
        }';
        return json_decode($fakeResponse);
    }
}
