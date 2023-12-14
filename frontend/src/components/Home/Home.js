import React, { useState } from "react";
import "../Home/Home.css";
import img1 from "../images/first.jpeg";
import img2 from "../images/second.jpeg";
import img3 from "../images/third.jpeg";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [domain, setDomain] = useState(null)
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }


    const getDetails = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/getSearchResults', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: {
                    source_sentence: searchValue,
                    sentences: [],
                },
            }),
        });
        const responseData = await response.json();
        console.log(responseData);

        let sentences = [];
        responseData.map((work, index) => {
            setDomain(work.title)
            sentences.push(`${work.location} ${work.title} ${work.hours} ${work.description} ${work.fees}`);
            return null;
        });

        const scores = await query({
            "inputs": {
                "source_sentence": searchValue,
                "sentences": sentences
            }
        });
        console.log(scores)

        const objectsWithScores = responseData.map((obj, index) => ({
            ...obj,
            score: scores[index]
        }));

        setSearchResults(objectsWithScores.sort((a, b) => b.score - a.score));



    }

    return (
        <div>
            <div>
                <div className="home-sec">
                    <div className="frame1">
                        <div className="search-sec">
                            <form action="" onSubmit={getDetails}>
                                <input
                                    className="search-bar"
                                    type="search"
                                    placeholder="Search Your Next Work "
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />

                                {/* <img className="search-icon" src={img1} alt="" /> */}
                            </form>
                            <div className="job-sec">
                                <ul className="job-title">
                                    <li><strong>Design</strong></li>
                                    <li><strong>Programming & Tech</strong></li>
                                    <li><strong>Data</strong></li>
                                    <li><strong>Photography</strong></li>
                                    <li><strong>Video & Animation</strong></li>
                                    <li><strong>Content Writing</strong></li>
                                    <li><strong>Digital Marketing</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/* <div className="line"></div> */}

                    <div className="explore">
                        <h2>{domain ? domain : 'Works Available'}</h2>
                        <h3 className="explore-more">Explore More ➜</h3>
                    </div>

                    {/* <div className="box-container"> */}
                    {searchResults ? (
                        <div className="box-container">
                            {searchResults.map((result, index) => (
                                <div key={index} className="content-sec">
                                    <h3>{result.title}</h3>
                                    <div className="details">
                                        <h4 className="company-name">{result.company}</h4>
                                        <p className="location-name">{result.location}</p>
                                        <p className="rupees">₹ {result.fees}/Month</p>
                                        {/* You can customize the rendering based on your object structure */}
                                        <p className="remote">Remote</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                    {/* </div> */}

                    {/* <div className="box-sec">
            <div className="box">
              <div className="icons">
                <img className="logo-img" src={img2} alt="company logo" />
                <img className="save-img" src={img3} alt="save" />
              </div>

              <div className="content-sec">
                <h3>Graphic Designer</h3>
                <h4 className="company-name">Jio</h4>
                <p className="locatio-name">Mumbai, Maharashtra, India</p>
                <p className="rupees">₹ 25,000/Month</p>
                <p className="remote">Remote</p>
              </div>
            </div>
          </div> */}

                    {/* <div className="box-sec">
            <div className="box">
              <div className="icons">
                <img className="logo-img" src={img2} alt="company logo" />
                <img className="save-img" src={img3} alt="save" />
              </div>

              <div className="content-sec">
                <h3>Graphic Designer</h3>
                <h4 className="company-name">Jio</h4>
                <p className="locatio-name">Mumbai, Maharashtra, India</p>
                <p className="rupees">₹ 25,000/Month</p>
                <p className="remote">Remote</p>
              </div>
            </div>
          </div>


          <div className="box-sec">
            <div className="box">
              <div className="icons">
                <img className="logo-img" src={img2} alt="company logo" />
                <img className="save-img" src={img3} alt="save" />
              </div>

              <div className="content-sec">
                <h3>Graphic Designer</h3>
                <h4 className="company-name">Jio</h4>
                <p className="locatio-name">Mumbai, Maharashtra, India</p>
                <p className="rupees">₹ 25,000/Month</p>
                <p className="remote">Remote</p>
              </div>
            </div>
          </div> */}





                </div>
            </div>
        </div>
    );
};

export default Home;