import React from "react";
// import CountUp from 'react-countup';
import styles from "../Counter/counter.module.scss";

const CounterUpPage = () => {
  return (
    <div className={styles.counterPage_section}  style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/images/img 8.jpg')",
      }}>
        <div className={styles.counter_txt}>
          <div>
            <h2>15</h2>
            {/* <h2><CountUp start={0} end={15} duration={2} delay={0}/></h2> */}
            <h4>Volunteers</h4>
          </div>
          <div>
            <h2>10</h2>
            {/* <h2><CountUp start={0} end={10} duration={2} delay={0}/></h2> */}
            <h4>Donations</h4>
          </div>
          <div>
            <h2>15</h2>
            {/* <h2><CountUp start={0} end={15} duration={2} delay={0}/></h2> */}
            <h4>Campaigns</h4>
          </div>
        </div>
    </div>
  );
};

export default CounterUpPage;
