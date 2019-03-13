import React, {Component} from 'react';
import findByType from './findByType';
import css from './Logpan.css';

const Title = () => null;
class Logpan extends Component {


   renderTitle() {
      const {children} = this.props;
      const title = findByType(children, Title);
      if (!title) {
         return null;
      }
      return <div className={css.title}>{title.props.children}</div>;
   }


   render() {
      let childrens = []
      if (typeof this.props.children !== 'undefined') {
         this.props.children.map((e, k) => {
            childrens.push(e)
            return null
         })
      }

      return (<div className="logpan">
         {this.renderTitle()}
         {
            childrens.map((e, key) => {
               return e
            })
         }
      </div>);
   }
}

Logpan.Title = Title;

export default Logpan;
