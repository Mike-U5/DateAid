import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { AdviceButton } from '../elements/AdviceButton';
import { CustomStackHeader } from '../features/CustomStackHeader';

const marginTop = Math.round(Dimensions.get('window').height) * 0.0125;

export class ClothingAdvice extends Component<{name: string, navigation: any}> {
	render() {
		return (
			<View style={{flex: 2}}>
				<CustomStackHeader navigation={this.props.navigation} text='Clothing Advice'/>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: marginTop}}>
					<AdviceButton text={'Casual'} onPress={null} />
					<AdviceButton text={'Formal'} onPress={null} />
				</View>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
					<AdviceButton text={'Sportive'} onPress={null} />
					<AdviceButton text={'Lazy'} onPress={null} />
				</View>
			</View>
		);
	}
}
