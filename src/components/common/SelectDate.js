import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../../scss/SelectDate.scss";

export default function SelectDate({ handleCancel, handleDate }) {

    const [weatherDate, setWeatherDate] = useState(null)

    const weatherDateChange = (newValue) => {
        setWeatherDate(newValue)
    }

    // weatherDate.$y = year
    // weatherDate.$M = month - 1 
    // weatherDate.$D = day

    const DateClick = () => {
        handleDate(weatherDate)
        handleCancel()
    }

    return (
        <div className='SelectDate-container'>
            <div className='modal-container'>
                <h2>날짜 선택하기</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        label="날짜를 선택해주세요"
                        slotProps={{
                            textField: {
                                size: "small",
                            }
                        }}
                        format='YYYY / MM / DD'
                        value={weatherDate}
                        onChange={(newValue) => weatherDateChange(newValue)}
                    />
                </LocalizationProvider>
                <div className='button'>
                    <button onClick={DateClick}>확인</button>
                    <button onClick={()=>handleCancel()}>취소</button>
                </div>
            </div>
        </div>
    );
}