import {motion} from 'framer-motion'

const liVariant = {
    animate: {
        x: 10,
    }
}
export default function Footer() {
    return <footer className="container py-5">
        <div className="row" id='about'>
            <div className="col-12 col-md">
                <small className="d-block mb-3 text-muted">© {new Date().getFullYear()} JAMAOUI Mouad</small>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Cool stuff</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Random feature</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Team feature</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Stuff for developers</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Another one</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Last time</a></motion.li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Resource name</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Resource</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Another resource</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Final resource</a></motion.li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Business</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Education</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Government</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Gaming</a></motion.li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Team</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Locations</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Privacy</a></motion.li>
                    <motion.li variants={liVariant}
                               whileHover='animate'
                    ><a className="link-secondary" href="#">Terms</a></motion.li>
                </ul>
            </div>
        </div>
    </footer>
}
