import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Alert from '@mui/material/Alert';

function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Application
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                        backgroundColor: '#e0e0e0', // Change background color on hover
                        cursor: 'pointer'           // Change cursor to pointer on hover
                    }
                }}
            >
                <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        color: '#3f51b5',
                        textAlign: 'center',
                        marginBottom: 2,
                        fontSize: '1.5rem',
                        lineHeight: 1.5
                    }}
                >
                    Custom Heading
                </Typography>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
            </Box>
        </div>
    );
}
export default App;
