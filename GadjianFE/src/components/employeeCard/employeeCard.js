import React, {useState, useEffect} from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faChevronLeft, faChevronRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Spinner, Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import photo from '../resources/8587427.jpg';
import './employeeCard.css'

const EmployeeCard = (props) => {
    const {dataEmployee} = props.Employee;
    const [filterEmployee, setFilterEmployee] = useState([]);
    const [Limit, setLimit] = useState(4);
    const [Start, setStart] = useState(0);
    const [search, setSearch] = useState('');

    //Search employee name based on first name
    useEffect(() => {
        const getSearchData = (data) => {
            if (data) {
                let reduxEmployee = dataEmployee;
                var verifiedEmployee = reduxEmployee.filter((val) => {
                    return val.name.first.toLocaleLowerCase().includes(data);
                })
                setFilterEmployee(verifiedEmployee);
            } else {
                setFilterEmployee('');
            }
        }
        getSearchData(search);
    }, [search, dataEmployee]);

    //convert employee's date of birthday from raw json data (YYYY-MM-DDTHH:MM:SSSZ) to DD - MM format
    const birthday = (date) => {
        let splitDate = date.split('T');
        let newDate = splitDate[0].split('-');
        return `${newDate[2]} - ${newDate[1]}`
    }

    //take first 8 digits of an employee's ID
    const employeeID = (id) => {
        let quickID = id.split('-');
        return quickID[0];
    }

    const pagination = (bool) => {
        if(bool === true) {
            let newStart = Start + 4;
            let limit = Limit + 4;
            setStart(newStart);
            setLimit(limit);
        } else {
            let newStart = Start - 4
            let limit = Limit - 4
            setStart(newStart)
            setLimit(limit)
        }
    }

    const showEmployee = () => {
        let allEmployee;
        if(!filterEmployee) {
            let reduxEmployee = dataEmployee;
            allEmployee = reduxEmployee.map((val, ind) => {
                if(ind < Limit && ind >= Start) {
                    return (
                        <LazyLoad key={ind} height={100} offset={[-100, 100]} placeholder={<Spinner>Loading...</Spinner>}>
                            <div key={ind} className='cardsTest'>
                                <Card className='Card'>
                                    <CardBody className='card-body'>
                                        <div className='card-header'>
                                            <CardText className='personnelID'>
                                                Personnel ID: <span style={{color: '#23c7c6', fontSize: '20px'}}>{employeeID(val.login.uuid)}</span>
                                            </CardText>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faEllipsisH}
                                                    size='2x'
                                                ></FontAwesomeIcon>
                                            </span>
                                        </div>
                                        <div className='lines' />
                                        <div className='info'> 
                                            <div className='photo'>
                                                <img className='imgcard' src={val.picture.medium} alt='' />
                                            </div>
                                            <div className='biodata'>
                                                <div className='infoTitle'>Name</div>
                                                <div className='infoContain'>{val.name.first} {val.name.last}</div>
                                                <div className='infoTitle'>Telephone</div>
                                                <div className='infoContain'>{val.cell}</div>
                                                <div className='infoTitle hideInfoTitle'>Birthday</div>
                                                <div className='infoContain hideInfoContain'>{birthday(val.dob.date)}</div>
                                                <div className='infoTitle hideInfoTitle'>email</div>
                                                <div className='infoContain hideInfoContain'>{val.email}</div>
                                            </div>
                                        </div>                                    
                                    </CardBody>
                                </Card>
                            </div>
                        </LazyLoad>
                    )
                }
            })
        } else {
            allEmployee = filterEmployee.map((val, ind) => {
                if (ind < Limit && ind >= Start) {
                    return (
                        <div key={ind} className='cardsTest'>
                            <Card className='Card'>
                                <CardBody className='card-body'>
                                    <div className='card-header'>
                                        <CardText className='personnelID'>
                                            Personnel ID: <span style={{color: '#23c7c6', fontSize: '20px'}}>{employeeID(val.login.uuid)}</span>
                                        </CardText>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faEllipsisH}
                                                size='2x'
                                            ></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <div className='lines' />
                                    <div className='info'> 
                                        <div className='photo'>
                                            <img className='imgcard' src={val.picture.medium} alt='' />
                                        </div>
                                        <div className='biodata'>
                                            <div className='infoTitle'>Name</div>
                                            <div className='infoContain'>{val.name.first} {val.name.last}</div>
                                            <div className='infoTitle'>Telephone</div>
                                            <div className='infoContain'>{val.cell}</div>
                                            <div className='infoTitle hideInfoTitle'>Birthday</div>
                                            <div className='infoContain hideInfoContain'>{birthday(val.dob.date)}</div>
                                            <div className='infoTitle hideInfoTitle'>email</div>
                                            <div className='infoContain hideInfoContain'>{val.email}</div>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>
                    )
                }
            })
        }
        return allEmployee;
    }

    useEffect(() => {
        showEmployee();
    }, [Start, Limit, dataEmployee])

    const showEmployeeWeb = () => {
        let allEmployee;
        if(!filterEmployee) {
            let reduxEmployee = dataEmployee;
            allEmployee = reduxEmployee.map((val, ind) => {
                return (
                    <LazyLoad key={ind} height={100} offset={[-100, 100]} placeholder={<Spinner>Loading...</Spinner>}>
                        <div key={ind} className='cardsTest'>
                            <Card className='Card'>
                                <CardBody className='card-body'>
                                    <div className='card-header'>
                                        <CardText className='personnelID'>
                                            Personnel ID: <span style={{color: '#23c7c6', fontSize: '20px'}}>{employeeID(val.login.uuid)}</span>
                                        </CardText>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faEllipsisH}
                                                size='2x'
                                            ></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <div className='lines' />
                                    <div className='info'> 
                                        <div className='photo'>
                                            <img className='imgcard' src={val.picture.medium} alt='' />
                                        </div>
                                        <div className='biodata'>
                                            <div className='infoTitle'>Name</div>
                                            <div className='infoContain'>{val.name.first} {val.name.last}</div>
                                            <div className='infoTitle'>Telephone</div>
                                            <div className='infoContain'>{val.cell}</div>
                                            <div className='infoTitle hideInfoTitle'>Birthday</div>
                                            <div className='infoContain hideInfoContain'>{birthday(val.dob.date)}</div>
                                            <div className='infoTitle hideInfoTitle'>email</div>
                                            <div className='infoContain hideInfoContain'>{val.email}</div>
                                        </div>
                                    </div>                                    
                                </CardBody>
                            </Card>
                        </div>
                    </LazyLoad>
                )
            })
        } else {
            allEmployee = filterEmployee.map((val, ind) => {
                return (
                    <div key={ind} className='cardsTest'>
                        <Card className='Card'>
                            <CardBody className='card-body'>
                                <div className='card-header'>
                                    <CardText className='personnelID'>
                                        Personnel ID: <span style={{color: '#23c7c6', fontSize: '20px'}}>{employeeID(val.login.uuid)}</span>
                                    </CardText>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faEllipsisH}
                                            size='2x'
                                        ></FontAwesomeIcon>
                                    </span>
                                </div>
                                <div className='lines' />
                                <div className='info'> 
                                    <div className='photo'>
                                        <img className='imgcard' src={val.picture.medium} alt='' />
                                    </div>
                                    <div className='biodata'>
                                        <div className='infoTitle'>Name</div>
                                        <div className='infoContain'>{val.name.first} {val.name.last}</div>
                                        <div className='infoTitle'>Telephone</div>
                                        <div className='infoContain'>{val.cell}</div>
                                        <div className='infoTitle hideInfoTitle'>Birthday</div>
                                        <div className='infoContain hideInfoContain'>{birthday(val.dob.date)}</div>
                                        <div className='infoTitle hideInfoTitle'>email</div>
                                        <div className='infoContain hideInfoContain'>{val.email}</div>
                                    </div>
                                </div>                                    
                            </CardBody>
                        </Card>
                    </div>
                )
            })
        }
        return allEmployee;
    }

    return (
        <div className='main'>
            <div className='employeeSection'>
                <Navbar 
                    className='Navbar'
                    color='light'
                    expand='md'
                    light
                >
                    <NavbarBrand className='leftNavbar'>
                        <div className='personnellist'>PERSONNEL LIST</div>
                        <div className='listofallperson'>List of all personnels</div>
                    </NavbarBrand>
                    <NavbarBrand className='rightNavbar'>
                        <div className="searchEmployee">
                            <FontAwesomeIcon className='searchIcon'
                                icon={faSearch}
                                size='1x'
                            ></FontAwesomeIcon>
                            <input onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())} className='inputfield' type="text" placeholder='Find Personnel'/>
                        </div>
                        <div className="addEmployee">
                            <Button className='btn'>ADD PERSONNEL&nbsp;&nbsp;
                                <FontAwesomeIcon className='plusIcon'
                                    icon={faPlus}
                                    size='1x'
                                ></FontAwesomeIcon>
                            </Button>
                        </div>
                    </NavbarBrand>
                </Navbar>
            </div>
            
            <div className='employeeWeb'>
                {showEmployee()}
            </div>   

            <div className='employeeMobile'>
                {showEmployeeWeb()}
            </div>

            <div className='pagination hidepaging'>
                {
                    Start === 0?
                    <div className='prev disableprev'>
                        <span>
                            <FontAwesomeIcon className='chevronLeft'
                                icon={faChevronLeft}
                                size='1x'
                            ></FontAwesomeIcon>
                        </span>
                        Previous Page
                    </div>
                    :
                    <div onClick={() => pagination(false)} className='prev'>
                        <span>
                            <FontAwesomeIcon className='chevronLeft'
                                icon={faChevronLeft}
                                size='1x'
                            ></FontAwesomeIcon>
                        </span>
                        Previous Page
                    </div>
                }
                {
                    filterEmployee?
                        Limit >= filterEmployee.length?
                        <div className="next disablenext">
                            Next Page
                            <span>
                                <FontAwesomeIcon className='chevronRight'
                                    icon={faChevronRight}
                                    size='1x'
                                ></FontAwesomeIcon>
                            </span>
                        </div>
                        :
                        <div onClick={()=> pagination(true)} className="next">
                            Next Page
                            <span>
                                <FontAwesomeIcon className='chevronRight'
                                    icon={faChevronRight}
                                    size='1x'
                                ></FontAwesomeIcon>
                            </span>
                        </div>
                    :    
                    Limit === 20 ?
                    <div className="next disablenext">
                        Next Page
                        <span>
                            <FontAwesomeIcon className='chevronRight'
                                icon={faChevronRight}
                                size='1x'
                            ></FontAwesomeIcon>
                        </span>
                    </div>
                    :
                    <div onClick={()=> pagination(true)} className="next">
                        Next Page
                        <span>
                            <FontAwesomeIcon className='chevronRight'
                                icon={faChevronRight}
                                size='1x'
                            ></FontAwesomeIcon>
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

//Convert state to props
const Statetoprops = (state) => {
    return {
      Employee: state.Employee
    }
}

export default connect(Statetoprops) (EmployeeCard);