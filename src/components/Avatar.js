import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import AppStyles from '@styles/AppStyles';
import StringUtil from '@utils/StringUtil';
import { SvgUri } from 'react-native-svg';

const Avatar = ({
  imageUrl,
  name,
  containerStyle,
  assetStyle,
  placeholder,
}) => {

  const [isLoading, setLoading] = useState(true);

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

  const checkImageUri = (uri) => {
    return fetch(uri)
      .then(res => {
        if (res.status !== 404) {
          return true;
        }
        return false;
      })
      .catch(err => {
        console.log(err)
        return false;
      })
  }

  useEffect(() => {
    if (!!imageUrl) {
      setLoading(true);
      const fetchAsync = async () => {
        await checkImageUri(imageUrl);
        setLoading(false);
      };
      fetchAsync();
    } else {
      setLoading(false)
    }
  }, [])
  let renderFn;

  if (!!imageUrl && !isLoading) {
    if (StringUtil.isSvgUri(imageUrl)) {
      renderFn = () => renderSvg({ imageUrl });
    } else {
      renderFn = () => renderImage(imageUrl);
    }
  } else if (!imageUrl && placeholder) {
    renderFn = () => renderPlaceholder();
  } else if (!imageUrl) {
    renderFn = () => renderInitials({ name });
  }
  if (!renderFn) {
    return null;
  }
  return renderFn()
};

export default Avatar;