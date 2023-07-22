import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateReservationForm = () => {
    const [registrationId, setRegistrationId] = useState('');
    const [orgId, setOrgId] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [status, setStatus] = useState('');
    const [brokerId, setBrokerId] = useState('');
    const [downPaymentAmount, setDownPaymentAmount] = useState('');
    const [paymentTypeId, setPaymentTypeId] = useState('');
    const [totalUnitPrice, setTotalUnitPrice] = useState('');
    const [saleableAreaSqm, setSaleableAreaSqm] = useState('');
    const [unitRateSqm, setUnitRateSqm] = useState('');
    const [VATRETTAmount, setVATRETTAmount] = useState('');
    const [salesrepId, setSalesrepId] = useState('');
    const [releaseId, setReleaseId] = useState('');
    const [buildingLandId, setBuildingLandId] = useState('');
    const [floorParcelId, setFloorParcelId] = useState('');
    const [receiptNumber, setReceiptNumber] = useState('');
    const [paymentTerm, setPaymentTerm] = useState('');
    const [mortgageEmployeeName, setMortgageEmployeeName] = useState('');
    const [mortgageEmployeeContact, setMortgageEmployeeContact] = useState('');
    const [RETTVATExemption, setRETTVATExemption] = useState('');
    const [RETTVATReimbursementCertificateNumber, setRETTVATReimbursementCertificateNumber] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a Reservation object with all the form data
        const reservation = {
            registration_id: registrationId,
            org_id: orgId,
            registration_date: registrationDate,
            status,
            broker_id: brokerId,
            down_payment_amount: downPaymentAmount,
            payment_type_id: paymentTypeId,
            total_unit_price: totalUnitPrice,
            saleable_area_sqm: saleableAreaSqm,
            unit_rate_sqm: unitRateSqm,
            VAT_RETT_Amount: VATRETTAmount,
            salesrep_id: salesrepId,
            release_id: releaseId,
            building_land_id: buildingLandId,
            floor_parcel_id: floorParcelId,
            receipt_number: receiptNumber,
            payment_term: paymentTerm,
            Mortgage_Employee_name: mortgageEmployeeName,
            Mortgage_Employee_contact: mortgageEmployeeContact,
            RETT_VAT_Exemption: RETTVATExemption,
            RETT_VAT_Reimbursement_Certificate_Number: RETTVATReimbursementCertificateNumber,
        };
        let token = sessionStorage.getItem('token'); // get the token from session storage
        try {
            // Make a POST request to your backend API with the reservation data
            const response = await axios.post('https://daarconn-dev.alarkan.com/oracle/createcustomerreservation', reservation,
                {
                    // send token in authorization header
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            console.log(response.data);
            toast.success('Reservation Reserved Successfully!', { position: 'top-right' });
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message ?? "Something Went wrong Please try again!", { position: 'top-right' });
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="card login-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">User Reservation</h2>
                            <p className='text-center'></p>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="regId">Registeration ID</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Registeration ID"
                                            value={registrationId}
                                            onChange={(e) => setRegistrationId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regDate">Registeration Date</label>
                                        <input
                                            type="Registeration Date"
                                            className="form-control"
                                            placeholder="Registeration Date"
                                            value={registrationDate}
                                            onChange={(e) => setRegistrationDate(e.target.value)}
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

                                    <div className="form-group">
                                        <label htmlFor="Pay-type-id">Payment Type Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Payment Type Id"
                                            value={paymentTypeId}
                                            onChange={(e) => setPaymentTypeId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='saleable-area'>Saleable Area</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Saleable Area'
                                            value={saleableAreaSqm}
                                            onChange={(e) => setSaleableAreaSqm(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='VATRETT-Amount'>VAT RETT Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='VAT RETT Amount'
                                            value={VATRETTAmount}
                                            onChange={(e) => setVATRETTAmount(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='releaseId'>Release Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Release Id'
                                            value={releaseId}
                                            onChange={(e) => setReleaseId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='flr-parcel-id'>Floor Parcel Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Floor Parcel Id'
                                            value={floorParcelId}
                                            onChange={(e) => setFloorParcelId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='paymentTerm'>Payment Term</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Payment Term'
                                            value={paymentTerm}
                                            onChange={(e) => setPaymentTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='MortgageContact'>Mortgage Employee Contact</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Mortgage Employee Contact'
                                            value={mortgageEmployeeContact}
                                            onChange={(e) => setMortgageEmployeeContact(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='Reimbur_cer'>RETVATT Reimbursment Certificate Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Reimbursment Certificate Number'
                                            value={RETTVATReimbursementCertificateNumber}
                                            onChange={(e) => setRETTVATReimbursementCertificateNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="orgId">Organization Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Organization Id"
                                            value={orgId}
                                            onChange={(e) => setOrgId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="down-payAmount">Down Payment Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Down Payment Amount"
                                            value={downPaymentAmount}
                                            onChange={(e) => setDownPaymentAmount(e.target.value)}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="TUnitprice">Total Unit Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Total Unit Price"
                                            value={totalUnitPrice}
                                            onChange={(e) => setTotalUnitPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unitRate">Unit Rate sqm</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Unit Rate sqm"
                                            value={unitRateSqm}
                                            onChange={(e) => setUnitRateSqm(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rep_id">Sales Representative Id</label>
                                        <input
                                            type="phone"
                                            className="form-control"
                                            placeholder="Sales Representative Id"
                                            value={salesrepId}
                                            onChange={(e) => setSalesrepId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="landi">Building Land Id</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Building Land Id"
                                            value={buildingLandId}
                                            onChange={(e) => setBuildingLandId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="receipt_no">Receipt Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Receipt Number"
                                            value={receiptNumber}
                                            onChange={(e) => setReceiptNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Mortgage-emp-name">Mortgage Employee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mortgage Employee Name"
                                            value={mortgageEmployeeName}
                                            onChange={(e) => setMortgageEmployeeName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Mortgage-emp-name">RETT VAT Exemption</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="RETT VAT Exemption"
                                            value={RETTVATExemption}
                                            onChange={(e) => setRETTVATExemption(e.target.value)}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="row d-flex justify-center">
                                <div className="col">
                                    <button type='submit' className="btn btn-block login-button fw-bold">
                                        Submit
                                    </button>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreateReservationForm;
