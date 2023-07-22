import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {

    const [documentType, setDocumentType] = useState('');
    const [lang, setLang] = useState('');
    const [signatureLang, setSignatureLang] = useState('');
    const [city, setCity] = useState('');
    const [phoneCountryCode, setPhoneCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [leadId, setLeadId] = useState('');
    const [leadSource, setLeadSource] = useState('');
    const [brokerId, setBrokerId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [nationality, setNationality] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [customerIdType, setCustomerIdType] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [customerType, setCustomerType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a Customer object with all the form data
        const customer = {
            document_type: documentType,
            lang,
            signatureLang,
            Customer: {
                city,
                phone_country_code: phoneCountryCode,
                phone_number: phoneNumber,
                email_address: emailAddress,
                lead_id: leadId,
                lead_source: leadSource,
                broker_id: brokerId,
                first_name: firstName,
                last_name: lastName,
                customer_name: customerName,
                nationality,
                date_of_birth: dateOfBirth,
                gender,
                customer_id_type: customerIdType,
                id_number: customerId,
                customer_type: customerType,
            },
        }
        console.log(customer);
        let token = sessionStorage.getItem('token'); // get the token from session storage
        try {
            // Make a POST request to your backend API with the customer data
            const response = await axios.post('https://daarconn-dev.alarkan.com/oracle/createcustomerreservation', customer,
                {
                    // send token in authorization header
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );
            console.log(response.data);
            toast.success('Customer Created Successfully', { position: 'top-right' });

        } catch (error) {
            console.error(error);
            // Handle error or show an error message to the user
            toast.error(error?.response?.data?.message ?? "Customer Creation Failed!", { position: 'top-right' });
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="card login-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Create User</h2>
                            <p className='text-center'>Hey! Enter your details to get your account </p>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={emailAddress}
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customerName">Customer Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Customer Name"
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="customerIDType">Customer ID Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Customer ID Type"
                                            value={customerIdType}
                                            onChange={(e) => setCustomerIdType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='document-type'>Document Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Document type'
                                            value={documentType}
                                            onChange={(e) => setDocumentType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='country code'>Country Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Country code'
                                            value={phoneCountryCode}
                                            onChange={(e) => setPhoneCountryCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='city'>City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='language'>Language</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Language'
                                            value={lang}
                                            onChange={(e) => setLang(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='language'>Lead Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Lead Id'
                                            value={leadId}
                                            onChange={(e) => setLeadId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="brokerId">Broker Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Broker Id"
                                            value={brokerId}
                                            onChange={(e) => setBrokerId(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="email">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customer-id">Customer Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Customer Id"
                                            value={customerId}
                                            onChange={(e) => setCustomerId(e.target.value)}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="customerType">Customer Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Customer Type"
                                            value={customerType}
                                            onChange={(e) => setCustomerType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nationality">Nationality</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nationality"
                                            value={nationality}
                                            onChange={(e) => setNationality(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nationality">Phone Number</label>
                                        <input
                                            type="phone"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nationality">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Date of Birth"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sign-lang">Signature Language</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Signature Language"
                                            value={signatureLang}
                                            onChange={(e) => setSignatureLang(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lead source">Lead Source</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Lead Source"
                                            value={leadSource}
                                            onChange={(e) => setLeadSource(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-center">
                                <div className="col">
                                    <button type="submit" className="btn btn-block login-button fw-bold">
                                        Create User
                                    </button>
                                    
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register
