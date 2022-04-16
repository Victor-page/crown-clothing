import { Component } from 'react';
import { Route } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore';
import { connect } from 'react-redux';

import {
  db,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = { isLoading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const q = query(collection(db, 'collections'));

    const handleRetrievedDocs = (querySnapshot) => {
      const { docs } = querySnapshot;
      const { updateCollections } = this.props;

      const collectionsMap = convertCollectionsSnapshotToMap(docs);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    };

    getDocs(q).then(handleRetrievedDocs).catch(alert);
  }

  render() {
    const { path } = this.props.match;
    const { isLoading } = this.state;

    return (
      <>
        <Route
          exact
          path={`${path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
