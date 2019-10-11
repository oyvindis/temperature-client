import { compose } from 'recompose';
import { mainPageResolver } from './main-page-resolver';
import { MainPagePure } from './main-page-pure';

// const mapRouteParams = withProps(({ match: { params } }) => _.pick(params, 'catalogId'));

const enhance = compose(mainPageResolver);
export const MainPage = enhance(MainPagePure);
