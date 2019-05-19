import React from 'react';
import { connect } from 'react-redux';
import { MusicPanel } from './music';
import { Dispatch, bindActionCreators } from 'redux';
import { requestSebaCurationMusicLists } from 'presentation/redux/music/actions';
import { List } from 'immutable';
import { Music } from 'domain/entity/music';
import { SebaCurationMusicState } from 'presentation/redux/music/reducer';

type DispatchProps = {
  requestSebaCurationMusicLists: () => any;
};

type StateProps = {
  musicList: List<Music>;
};

type Props = DispatchProps & StateProps;

class MusicList extends React.Component<Props> {
  componentDidMount() {
    this.props.requestSebaCurationMusicLists();
  }

  render() {
    return (
      <>
        <h2>Seba's choice</h2>
        {this.renderMusicComponent()}
      </>
    );
  }

  private renderMusicComponent = () => {
    const { musicList } = this.props;

    return musicList.map((music: Music) => <MusicPanel musicInfo={music} />);
  };
}

const mapStateToProps = (state: SebaCurationMusicState): StateProps => ({
  musicList: state.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(
    {
      requestSebaCurationMusicLists,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusicList);
