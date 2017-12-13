'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _ArticleList = require('../ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a'
      },
      b: {
        id: 'b'
      }
    }
  };

  it('renders correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ArticleList2.default, testProps));
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});