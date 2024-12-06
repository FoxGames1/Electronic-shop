
import { Input, ConfigProvider } from "antd"
import '../../../css/Header/Header__content/FlexBox.css'

const { Search } = Input

const onSearch = (value, _e, info) => console.log(info?.source, value)

const SearchItem = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 18,

          },
        },
      }}
    >
      <Search
        className="search"
        placeholder="input search text"
        onSearch={onSearch}
        colorIcon={"red"}
      />
    </ConfigProvider>
  </>
)

export default SearchItem