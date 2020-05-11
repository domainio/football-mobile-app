import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import AppStyles from '@styles/AppStyles';
import StringUtil from '@utils/StringUtil';
import { SvgUri } from 'react-native-svg';

const Avatar = ({
  imageUrl,
  name,
  containerStyle,
  assetStyle,
  initialsContainerStyle,
  placeholder,
}) => {

  const renderSvg = () => (
    <View style={[AppStyles.avatarContainer, containerStyle]}>
      <SvgUri
        width={50}
        height={50}
        {...assetStyle}
        uri={imageUrl}
      />
    </View>
  );

  const renderImage = () => (
    <View style={[AppStyles.avatarContainer, containerStyle]}>
      <Image
        width={50}
        height={50}
        {...assetStyle}
        source={{ uri: imageUrl }}
      />
    </View>
  );

  const renderInitials = () => {
    const initials = StringUtil.extractInitials(name);
    return (
      <View style={[AppStyles.avatarContainer, AppStyles.avatarInitialsContainer, containerStyle]}>
        <Text
          style={[AppStyles.avatarInitialText]}
          adjustsFontSizeToFit={true}
        >
          {initials}
        </Text>
      </View>
    )
  }

  const renderPlaceholder = () => (
    <View style={[AppStyles.avatarContainer, containerStyle]}>
      {placeholder}
    </View>
  )

  let renderFn;
  if (!imageUrl && placeholder) {
    renderFn = () => renderPlaceholder();
  } else if (!imageUrl) {
    renderFn = () => renderInitials({ name });
  } else if (!!imageUrl && StringUtil.isSvgUri(imageUrl)) {
    renderFn = () => renderSvg({ imageUrl });
  } else if (!!imageUrl) {
    renderFn = () => renderImage(imageUrl);
  }

  return renderFn()
};



export default Avatar;