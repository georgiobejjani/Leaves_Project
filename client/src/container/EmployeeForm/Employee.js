import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Input from "../../component/inputfield/Input";
import Textarea from "../../component/inputfield/Textarea";
import Barchart from "../../component/barchart/Barchart";
export default function Employee() {
    const [totaldays, settotaldays] = useState(0)
    return (
        <>
            <Navbar />
            <div className='features-wrapper'>
                <div className='features-wrapper__annualleaves'>
                <div className='features-wrapper__annualleaves__title'>Annual Leave</div>
                <Barchart/>
                </div>
                <form>
                    <div className='features-wrapper__requestleaves'>
                        <div className='features-wrapper__requestleaves__title'>Request Leaves</div>
                        <div className='containerfullname'>
                            <div className='containerfullname__firstname'>
                                <Input inputsubtitle='First Name' />
                            </div>
                            <div className='containerfullname__lastname'>
                                <Input inputsubtitle='Last Name' />
                            </div>
                        </div>

                        <div className='containerdays'>
                            <div className='containerdays__firstday'>
                                <Input inputsubtitle='First Day' />
                            </div>
                            <div className='containerdays__lastday'>
                                <Input inputsubtitle='Last Day' />
                            </div>
                        </div>
                        <div className='containerreason'>
                            <Textarea inputsubtitle='Reason' />
                        </div>
                        <div className='actionfields'>
                            <div className='actionfields__totdays'>Total days: {totaldays}</div>
                            <button className='actionfields__btnrequest'>Request</button>

                        </div>

                    </div>
                </form>
                <div className='features-wrapper__myleaves'>
                <div className='features-wrapper__myleaves__title'>My Leaves</div>
                </div>
            </div>
        </>
    )
}