import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { I18nManager, StyleSheet, Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends TextProps {
  className?: string;
}

export const Text = ({ className = '', style, children, ...props }: Props) => {
  const textStyle = React.useMemo(
    () => twMerge('text-base text-black  dark:text-white  font-inter font-normal', className),
    [className],
  );

  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]) as TextStyle,
    [style],
  );
  return (
    <RNText className={textStyle} style={nStyle} {...props}>
      {children}
    </RNText>
  );
};
