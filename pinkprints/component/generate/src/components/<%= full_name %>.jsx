/******************************************************************************\
* File: <%= name %>.jsx
*
* Author: <%= author.name %>
*
* Description: <%= argv.description %>
*
* Notes: <%= argv.notes %>
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React from 'react';
<% if (argv.connect) { -%>
import { connect } from 'react-redux';
<% } -%>
<% if (argv.router) { -%>
import { withRouter } from 'react-router-dom';
<% } -%>
<% if (argv.style !== false) { -%>
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import style from '@/style/<%= full_name %>.scss';
<% } -%>
// React Class -----------------------------------------------------------------
class <%= name %> extends React.Component {
    render() {
        return (
            <div className={style.<%= name %>}>
                <%= name %>
            </div>
        );
    }
}

<% if (argv.connect) { -%>
//------------------------------------------------------------------------------
// Redux State -----------------------------------------------------------------
const mapStateToProps = (state, ownProps) => {
    return {};
};
//------------------------------------------------------------------------------
// Redux Actions ---------------------------------------------------------------
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};
//------------------------------------------------------------------------------
// Redux Connect ---------------------------------------------------------------
const container = connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
<% } -%>
//------------------------------------------------------------------------------
// Export ----------------------------------------------------------------------
<%
    let component = argv.connect ? 'container' : name;
    if (argv.router) {
        component = `withRouter(${component})`
    }
-%>
export default <%= component %>;