import React from 'react';
import { connect } from 'react-redux';
import { MusicPanel } from './music';
import { Dispatch, bindActionCreators } from 'redux';
import { requestSebaCurationMusicLists, RequestSebaMusic } from 'presentation/redux/getMusicInfo/actions';
import { Music } from 'domain/entity/music';
import { SebaMusicStateProps } from 'presentation/redux/getMusicInfo/reducer';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from 'presentation/redux/FetchStatus';
import { Loading } from 'presentation/components/loading';
const styles = require('./styles.scss');

type DispatchProps = {
  requestSebaCurationMusicLists: RequestSebaMusic;
};

type StateProps = {
  sebaMusic: SebaMusicStateProps;
  sebaMusicFetchState: FetchResult;
};

type Props = DispatchProps & StateProps;

class MusicList extends React.Component<Props> {
  componentDidMount() {
    const { requestSebaCurationMusicLists } = this.props;

    requestSebaCurationMusicLists();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Seba's choice</h2>
        <div className={styles.content}>
          {this.renderMusicComponent()}
        </div>
      </div>
    );
  }

  private renderMusicComponent = () => {
    const { sebaMusic } = this.props;
    const { sebaMusicFetchState } = this.props;

    switch (sebaMusicFetchState.fetchState) {
      case FetchStatus.DEFAULT:
      case FetchStatus.LOADING:
        return <Loading />;
      case FetchStatus.ERROR:
        return <div>Error</div>;
      case FetchStatus.SUCCESS:
        return sebaMusic.data.map((music: Music) => <MusicPanel musicInfo={music} />);
      default:
        return;
    }
  };
}

const mapStateToProps = (state: StateProps): StateProps => ({
  sebaMusic: state.sebaMusic,
  sebaMusicFetchState: state.sebaMusicFetchState,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      requestSebaCurationMusicLists,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusicList);
