import { TouchableOpacity, Text, View } from 'react-native';

export default function Listening() {
  
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ padding: 2 }}>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            width: 80,
            height: 80,
            backgroundColor: 'blue',
          }}>
          <Text style={{ color: 'white' }}>Hola</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 2 }}>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            width: 80,
            height: 80,
            backgroundColor: 'blue',
          }}>
          <Text style={{ color: 'white' }}>Hola</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
