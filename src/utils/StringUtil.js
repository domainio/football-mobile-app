import _ from 'lodash';

const _spaceRgx = /\s+/g;
const _fileExtensionRgx = /(?:\.([^\/]+))?$/;

const extractInitials = (str) => {
  if (!str || !_.isString(str)) {
    return '--';
  }
  const initials = (str && str.trim().split(_spaceRgx).slice(0, 2).map(word => word[ 0 ])) || [];
  return (initials.join('').toUpperCase() || '--');
};

const isSvgUri = (uri) => {
  return (_fileExtensionRgx.exec(uri)[ 1 ].toLowerCase() === 'svg');
};

export default {
  extractInitials,
  isSvgUri
}