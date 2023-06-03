import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(
        [
            {
                "name": "Enhancing CO2 solubility in the aquifer with the use of a downhole cooler tools",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/enhancing-co2-solubility-in-the-aquifer-with-the-use-of-a-downhol",
                "cu_author": "Mohsen Abbaszadeh",
                "date": "Jun 2020"
            },
            {
                "name": "Investigating the Impact of Temperature on Relative Permeability Curves Curing Geological CO2 Storage",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/investigating-the-impact-of-temperature-on-relative-permeability-",
                "cu_author": "Mohsen Abbaszadeh",
                "date": "Dec 2020"
            },
            {
                "name": "The influence of temperature on wettability alteration during CO            2 storage in saline aquifers",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/the-influence-of-temperature-on-wettability-alteration-during-co-",
                "cu_author": "Mohsen Abbaszadeh",
                "date": "Aug 2020"
            },
            {
                "name": "Accelerating CO2 Solubility in Brine With Low Temperature Injection Scenario: Using a Downhole Cooling Tools",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/accelerating-co2-solubility-in-brine-with-low-temperature-injecti",
                "cu_author": "Mohsen Abbaszadeh",
                "date": "3 Jun 2019"
            },
            {
                "name": "Investigating The Impact Of Relative Permeability Curves On Cold CO2 Injection",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/investigating-the-impact-of-relative-permeability-curves-on-cold-",
                "cu_author": "Mohsen Abbaszadeh",
                "date": "2018"
            },
            {
                "name": "Cross-Layer Multipath Multichannel MAC protocol for MANETs",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/cross-layer-multipath-multichannel-mac-protocol-for-manets",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Jun 2018"
            },
            {
                "name": "Performance evaluation of Receiver Directed Transmission protocol with a single transceiver in MANETs",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/performance-evaluation-of-receiver-directed-transmission-protocol",
                "cu_author": "Mohamed Abdelshafy",
                "date": "4 May 2017"
            },
            {
                "name": "Reliable Multipath Multi-channel Route Migration over Multi Link-Failure in Wireless Ad Hoc Networks",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/reliable-multipath-multi-channel-route-migration-over-multi-link-",
                "cu_author": "Mohamed Abdelshafy",
                "date": "23 Nov 2017"
            },
            {
                "name": "Resisting blackhole attacks on MANETs",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/resisting-blackhole-attacks-on-manets",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Jan 2016"
            },
            {
                "name": "Dynamic Source Routing under Attacks",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/dynamic-source-routing-under-attacks",
                "cu_author": "Mohamed Abdelshafy",
                "date": "12 Oct 2015"
            },
            {
                "name": "AODV & SAODV under Attack: Performance Comparison",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/aodv-amp-saodv-under-attack-performance-comparison",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Jun 2014"
            },
            {
                "name": "AODV Routing Protocol Performance Analysis under MANET Attacks",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/aodv-routing-protocol-performance-analysis-under-manet-attacks",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Jun 2014"
            },
            {
                "name": "Resisting flooding attacks on AODV",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/resisting-flooding-attacks-on-aodv",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Nov 2014"
            },
            {
                "name": "Analysis of security attacks on AODV routing",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/analysis-of-security-attacks-on-aodv-routing",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Dec 2013"
            },
            {
                "name": "Analysis and Evaluations of Wireless LANs Security Protocols",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/analysis-and-evaluations-of-wireless-lans-security-protocols",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Nov 2002"
            },
            {
                "name": "An Active Attack on Token-Based Security Protocol",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/an-active-attack-on-token-based-security-protocol",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Apr 2001"
            },
            {
                "name": "A New Attack on Aziz-Diffie Security Protocol",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/a-new-attack-on-aziz-diffie-security-protocol",
                "cu_author": "Mohamed Abdelshafy",
                "date": "Mar 2001"
            },
            {
                "name": "Artificial Insemination in Captive Lions is Bad News for Conservation",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/artificial-insemination-in-captive-lions-is-bad-news-for-conserva",
                "cu_author": "Jackie Abell",
                "date": "26 Feb 2021"
            },
            {
                "name": "Evaluation of the use of psychometric scales in human–wildlife interaction research to determine attitudes and tolerance toward wildlife",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/evaluation-of-the-use-of-psychometric-scales-in-humanwildlife-int",
                "cu_author": "Jackie Abell",
                "date": "Apr 2021"
            },
            {
                "name": "‘You come back fighting. That’s what gives you the drive to achieve’: The extraordinary psychological construction of the super-rich in entertainment documentaries",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/you-come-back-fighting-thats-what-gives-you-the-drive-to-achieve-",
                "cu_author": "Jackie Abell",
                "date": "5 May 2021"
            },
            {
                "name": "Social Psychology",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/social-psychology-3rd-european-edition",
                "cu_author": "Jackie Abell",
                "date": "28 Aug 2020"
            },
            {
                "name": "The Psychologists' Tree of Life: A Special Feature on Psychologists Working with Non-Human Animals.  A Matter of Pride",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/the-psychologists-tree-of-life-a-special-feature-on-psychologists",
                "cu_author": "Jackie Abell",
                "date": "1 Oct 2018"
            },
            {
                "name": "Simplified CFD Model for Assessing the Cooling Channel Design in 3D Printed High-Pressure Tools for Aluminium Alloy Casting",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/simplified-cfd-model-for-assessing-the-cooling-channel-design-in-",
                "cu_author": "Essam Abo-Serie",
                "date": "6 Apr 2021"
            },
            {
                "name": "Adjoint Optimization of conformal cooling channels for rapid prototyped mould inserts",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/adjoint-optimization-of-conformal-cooling-channels-for-rapid-prot",
                "cu_author": "Essam Abo-Serie",
                "date": "10 Sep 2019"
            },
            {
                "name": "CFD Simulation and testing of a Turbocharger Compressor for various Impeller Design Variables",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/cfd-simulation-and-testing-of-a-turbocharger-compressor-for-vario",
                "cu_author": "Essam Abo-Serie",
                "date": "10 Mar 2019"
            },
            {
                "name": "Conformal cooling of aluminium flat fins using a 3-D printed water-cooled mould",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/conformal-cooling-of-aluminium-flat-fins-using-a-3-d-printed-wate",
                "cu_author": "Essam Abo-Serie",
                "date": "10 Sep 2019"
            },
            {
                "name": "Effect of Split-injection on Fuel Mixing and Cylinder Flow Characteristics of GDI Engines",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/effect-of-split-injection-on-fuel-mixing-and-cylinder-flow-charac",
                "cu_author": "Essam Abo-Serie",
                "date": "12 Mar 2019"
            },
            {
                "name": "Exploring history as a driver of power imbalance within the Nigerian oil and gas-",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/exploring-history-as-a-driver-of-power-imbalance-within-the-niger",
                "cu_author": "Alim Abubakre",
                "date": "2021"
            },
            {
                "name": "Intra-stakeholder conflict: A case study of the upstream sector of Nigeria's oil and gas industry",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/intra-stakeholder-conflict-a-case-study-of-the-upstream-sector-of-2",
                "cu_author": "Alim Abubakre",
                "date": "2021"
            },
            {
                "name": "Risk Governance and Risk Disclosure Quality: Evidence from Corporate Firms in Nigeria",
                "pub_url": "https://pureportal.coventry.ac.uk/en/publications/risk-governance-and-risk-disclosure-quality-evidence-from-corpora",
                "cu_author": "Alim Abubakre",
                "date": "30 Apr 2021"
            }
        ]
    );

    // const getSearchResult = async () => {
    //     fetch(`http://localhost:8000/search?query=${searchQuery}`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             setSearchResults(data);
    //             console.log("response", data);
    //         });
    // };

    useEffect(() => {
        // getSearchResult();
    }, []);

    const handleSearch = async () => {
        // getSearchResult();
    };

    return (
        <div>
            <div className='headerBackground'>
                <img src='https://pureportal.coventry.ac.uk/skin/headerImage/' />
            </div>

            <div className='searchSection'>
                <div>
                    <div className='header'>
                        <div>
                            <FontAwesomeIcon icon={faBookOpen} aria-hidden='true' style={{ marginRight: "20px", color: 'gray' }} />
                            <span>
                                Find Research Outputs
                            </span>
                        </div>
                    </div>
                    <div className='searchBox'>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter your search query"
                        />
                        <button onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} aria-hidden='true' style={{ color: 'gray' }} />
                        </button>
                    </div>
                </div>
            </div>

            <div className='searchResult'>
                <div className='content'>
                    <h2>Search Results</h2>
                    <div className='pageDesc'>
                        50 - 100 out of 34,241
                    </div>
                    {searchResults.length > 0 ? (
                        <div className='card'>
                            {
                                searchResults.map((value) => {
                                    return <div className='box' style={{ marginTop: "30px", marginBottom: "30px" }}>
                                        <div>
                                            <a href={value.pub_url}>
                                                <span>{value.name}</span>
                                            </a>
                                        </div>
                                    </div>;
                                })
                            }
                        </div>
                    ) : (
                        <p>No search results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
