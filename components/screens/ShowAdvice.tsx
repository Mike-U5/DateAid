import React, { Component } from 'react';
import { View } from 'react-native';
import { Advices } from '../features/Advices';
import { HeaderText } from '../features/HeaderText';

export class ShowAdvice extends Component<{}> {
	render() {
		return (
			<View style={{}}>
				<View style={{alignItems: 'center', marginBottom: 20}}>
					<HeaderText text='Date Advice' />
				</View>
				<Advices text='1. Dont judge on first sight.' />
				<Advices text='2. Dont compare the date partner to your exes.' />
				<Advices text='3. Be honest.' />
				<Advices text='4. Let the conversation flow naturally.' />
				<Advices text='5. Show intrest.' />
				<Advices text='6. Dont talk about how previous relationships were.' />
				<Advices text='7. Focus on getting to know the other.' />
				<Advices text='8. Be mature and kind.' />
				<Advices text='9. Get comfortable by putting on clothes that you feel good in.' />
				<Advices text='10. Be humble.' />
			</View>
		);
	}
}
