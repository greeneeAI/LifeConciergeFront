import React from "react";
import greenee from "../img/greenee.png";

// const style = {
//     display:flex
// }

const HeaderAlarm = () => {
  return (
    <tt className='HeaderAlarm2'>
    <div>
      <div>
        <div className='HeaderAlarmBC'>
          <img
            src={greenee}
            className={"greenee"}
            style={{ width: "70px", padding: "20px" }}
          />
        </div>
        {/* <div>여기에 실시간 알림?</div> */}
      </div>
    </div>
    </tt>
  );
};

export default HeaderAlarm;