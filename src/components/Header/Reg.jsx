import { useState } from "react";
import { Select, ConfigProvider } from "antd";
import { Button, Radio } from "antd";
import { ReactComponent as LocationIcon } from "../../../public/Images/Header/Header__top/btn/locationIcon.svg";
import { ReactComponent as LogIn } from "../../../public/Images/Header/Header__top/btn/log in.svg";

const handleChange = (e) => {
  console.log(`selected ${e}`);
};

const Reg = () => {
  const [position, setPosition] = useState("start");

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              multipleSelectorBgDisabled: "var(--light-green)",
              optionSelectedBg: "var(--light-green)",
              optionActiveBg: "var(--light-green)",
              colorPrimary: "var(--dark-grey)",
              colorBorder: "var(--light-green)",
              activeOutlineColor: "var(--light-green)",
              hoverBorderColor: "var(--dark-green)",
              boxShadow: "none",
            },
            Button: {
              colorBgSolidActive: "var(--dark-green)",
              contentFontSize: 14,
              textTextColor: 'var(--dark-grey)',
              colorFillTertiary: 'var(--light-green)',
              colorFillSecondary: 'var(--dark-green)',
              fontWeight: 500,
            },
          },
        }}
      >
        <Select
          defaultValue="Москва"
          onChange={handleChange}
          options={[
            { value: "москва", label: "Москва" },
            { value: "санкт-петербург", label: "Санкт-Петербург" },
            { value: "казань", label: "Казань" },
          ]}
          prefix={<LocationIcon />}
          style={{
            width: 120,
            textAlign: "center",
            alignItems: "center",
          }}
        />

        <Radio.Group
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <Button icon={<LogIn />} type="text" iconPosition={position}>
            Вход/регистрация
          </Button>
        </Radio.Group>
      </ConfigProvider>
    </>
  );
};

export default Reg;
