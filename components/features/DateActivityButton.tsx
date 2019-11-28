import { GestureResponderEvent } from 'react-native';
import { DateActivity } from '../../data/DateActivities';
import { RectangleImageButton } from '../elements/RectangleImageButton';
import React, {Component} from 'react';

export class DateActivityButton extends Component<{ onPress: (event: GestureResponderEvent) => void; activity: DateActivity; }> {

	render() {
		return (<RectangleImageButton
			onPress={this.props.onPress}
			name={this.props.activity.name}
			src={this.props.activity.src}
		/>);
	}

}
