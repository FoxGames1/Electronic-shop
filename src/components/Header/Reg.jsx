import styles from '../../css/Header/Reg.module.css';
import { Select, ConfigProvider } from "antd";
import { ReactComponent as LocationIcon } from '../../../public/Images/Header/Header__top/btn/locationIcon.svg';

const handleChange = (e) => {
    console.log(`selected ${e}`);
}




const Reg = () => {
    return (
        <ConfigProvider
          theme={{
            components: {
              Select: {
                multipleSelectorBgDisabled: 'var(--light-green)',
                optionSelectedBg: 'var(--light-green)',
                optionActiveBg: 'var(--light-green)',
                colorPrimary: 'var(--dark-grey)',
                colorBorder: 'none',
                activeOutlineColor: 'var(--light-green)',
                boxShadow: 'none',
              },
            },
          }}
        >
        <div className={styles.register}>
            <Select
                className={styles.dropdown}
                defaultValue="Москва"
                onChange={handleChange}
                options={[
                    { value: 'москва', label: 'Москва' },
                    { value: 'санкт-петербург', label: 'Санкт-Петербург' },
                    { value: 'казань', label: 'Казань' }
                ]}
                prefix={<LocationIcon />}
                style={
                    {
                        width: 120, 
                        textAlign: 'center', 
                        alignItems: 'center',
                    }
                }
                
            />
        </div>
        </ConfigProvider>
    );
};

export default Reg;
