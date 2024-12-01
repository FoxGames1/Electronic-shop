import styles from '../../css/Header/Reg.module.css';
import { Select } from "antd";

// import locationIcon from '/Images/Header/Header__top/btn/locationIcon.svg';
// import locationArrow from '/Images/Header/Header__top/btn/locationIcon_arrow.svg';
// import registrationIcon from '/Images/Header/Header__top/btn/log in.svg';
const handleChange = (e) => {
    console.log(`selected ${e}`);
  };
const Reg = () => {

    return (
        <div className={styles.register} >
        <Select 
            className={styles.dropdown}
            defaultValue="Москва"
            onChange={handleChange}
            options={[
                { value: 'москва', label: 'Москва' },
                { value: 'москва', label: 'Москва' },
                { value: 'москва', label: 'Москва' }
            ]}
        >
        </Select>
        </div>
    );
};

export default Reg;