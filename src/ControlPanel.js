import { useEffect, useState } from "react"
import { Container, Form, Row } from "react-bootstrap"

const ControlPanel = ({ setFromYear, setToYear, setNumOfResults }) => {

    useEffect(() => {
        const savedFromYear = sessionStorage.getItem('fromYear');
        if (savedFromYear) {
            setFromYear(savedFromYear);
            setFromYearValue(savedFromYear);
        }
        const savedToYear = sessionStorage.getItem('toYear');
        if (savedToYear) {
            setToYear(savedToYear);
            setToYearValue(savedToYear);
        }
        const savedNumOfResults = sessionStorage.getItem('numOfResults');
        if (savedNumOfResults) {
            setNumOfResults(savedNumOfResults);
            setNumOfResultsValue(savedNumOfResults)
        }
    }, []);


    // year filter 
    const [yearOnClick, setYearOnClick] = useState(false);
    const [fromYearValue, setFromYearValue] = useState("");
    const [toYearValue, setToYearValue] = useState("");
    function year() {
        setYearOnClick(!yearOnClick);
    }
    function fromYearChange(e) {
        setFromYearValue(e.target.value)
        setFromYear(e.target.value)
    }
    function toYearChange(e) {
        setToYearValue(e.target.value)
        setToYear(e.target.value)
    }



    // number of results filter
    const [numOfResultsOnClick, setNumOfResultsOnClick] = useState(false);
    const [numOfResultsValue, setNumOfResultsValue] = useState("")
    function numOfResults() {
        setNumOfResultsOnClick(!numOfResultsOnClick);
    }
    function numOfResultsChange(e) {
        setNumOfResultsValue(e.target.value)
        setNumOfResults(e.target.value)
    }


    return (
        <div className='container' >
            <div className="card card-body" style={{ marginTop: "10px" }}>
                <h2 className="center">Filter Tool</h2>

                <button onClick={year}
                    className="btn btn-primary"
                    type="button"
                    style={{ margin: "10px" }}>
                    Year
                </button>
                {yearOnClick && <div className="row justify-content-center " >
                    <div className='row' >
                        <div className="col-4 center" >From</div>
                        <div className="col-8"><Form.Control type="text" value={fromYearValue} onChange={fromYearChange} /></div>
                    </div>
                    <div className='row' style={{ marginTop: "5px" }}>
                        <div className="col-4 center" >To</div>
                        <div className="col-8"><Form.Control type="text" value={toYearValue} onChange={toYearChange} /></div>
                    </div>
                </div>}

                <button onClick={numOfResults}
                    className="btn btn-primary"
                    type="button"
                    style={{ margin: "10px" }}>
                    Number of Results
                </button>
                {numOfResultsOnClick && <div className="row justify-content-center " >
                    <div className='row' >
                        <div className="col-4 center" >Number</div>
                        <div className="col-8"><Form.Control type="text" value={numOfResultsValue} onChange={numOfResultsChange} /></div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ControlPanel