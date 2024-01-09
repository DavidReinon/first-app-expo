import { TouchableOpacity, Text, View, ScrollView } from 'react-native';

export default function Definitions() {

  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <View style={{ flexDirection: 'column' }}>
        <ScrollView vertical={true}>
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

        </ScrollView>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            width: 80,
            height: 80,
            backgroundColor: 'black',
          }}>
          <Text style={{ color: 'white' }}>Comprobar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
