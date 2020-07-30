import React from 'react';
import { View } from 'react-native';

const ColumnDivider = props => {
    return (<View style={{ flexDirection: "row", flex: 1 }}>
        {props.children.map((child, pos) => {
            return (<View key={pos} style={{ flex: 1 }}>{child}</View>);
        })}
    </View>);
}

export default ColumnDivider;