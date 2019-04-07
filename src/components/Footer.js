import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    root: {
        backgroundColor:'black',
        color:'white'
    }
})
class Footer extends Component {
    state = {  }
    render() { 
        const { classes } = this.props
        return ( 
            <div className={classes.root}>
            <footer className="page-footer font-small mdb-color pt-4">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">PARCCS PROJECTS</h6>
                            <p>A GBC team developing solutions to facilitate daily activies </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <Link to="/">ChatRoom Application</Link>
                            </p>
                            <p>
                                <Link to="/">CARP Online retails</Link>
                            </p>
                            <p>
                                <Link to="/">Recycle Rewards website</Link>
                            </p>
                            <p>
                                <Link to="/">Bootstrap Angular</Link>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Stay Connected</h6>
                            <p>
                                <Link to="/">Your Account</Link>
                            </p>
                            <p>
                                <Link to="/">Become an Affiliate</Link>
                            </p>
                            <p>
                                <Link to="/">Shipping Rates</Link>
                            </p>
                            <p>
                                <Link to="/" >Help</Link>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                140 Kendal Street, Totonto Canada</p>
                            <p>
                                info@gmail.com</p>
                            <p>
                                + 01 234 567 88</p>
                            <p>
                                + 01 234 567 89</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-center text-md-left">© 2019 Copyright:
                                <Link href="https://mdbootstrap.com/education/bootstrap/">
                                <strong> Fullstack Assignment</strong>
                                </Link>
                            </p>
                        </div>
{/* 
                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <Link className="btn-floating btn-sm rgba-white-slight mx-1">               
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                        
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                                        
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
            </div>
         );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Footer);