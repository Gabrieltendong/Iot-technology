import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styles from './style.module.scss'

const NavbarCustom = () => {
    return(
        <Navbar id={styles.nabbar_wrapper} collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <div id={styles.logo_wrapper}>
                        <Link href={'/'}>
                            <Image
                                id={styles.logo}
                                src={'/assets/icons/logo_white.png'}
                                layout='fill'
                            />
                        </Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                <Offcanvas.Header closeButton>
                    
                </Offcanvas.Header>
                <Offcanvas.Body id={styles.navbar}>
                    <Nav className="justify-content-md-between flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Nos formations</Nav.Link>
                        <Nav.Link href="#action2">Entreprise</Nav.Link>
                        <Nav.Link href="/ebook">Ebook</Nav.Link>
                        <Nav.Link href="/register">Inscription</Nav.Link>
                        <Nav.Link href="/login">Connection</Nav.Link>
                        <Nav.Link href="/tarifs">Tarifs</Nav.Link>

                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarCustom;