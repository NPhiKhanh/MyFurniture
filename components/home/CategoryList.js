import { FlatList } from "react-native";
import IconCustom from "../UI/IconCustom";
import { SIZES } from "../../constants/theme";

function CategoryList({ onChangeCategory, chooseCategory }) {

    const list = [
        { name: 'chair', img: require('../../assets/imgs/chair.png') },
        { name: 'table', img: require('../../assets/imgs/table.png') },
        { name: 'floor-lamp', img: require('../../assets/imgs/floor-lamp.png') },
        { name: 'sofa', img: require('../../assets/imgs/sofa.png') },
        { name: 'wardrobe', img: require('../../assets/imgs/wardrobe.png') },
    ]
    return (
        <FlatList
            data={list}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <IconCustom item={item} chooseCategory={chooseCategory} onPress={onChangeCategory} />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
        />
    );
}

export default CategoryList;