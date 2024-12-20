import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.example.controller.AuthController;
import com.example.model.User;
import com.example.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AuthControllerTest {
    private UserService userService;
    private AuthController authController;

    @BeforeEach
    void setUp() {
        userService = mock(UserService.class);
        authController = new AuthController(userService);
    }

    @Test
    void testRegister() {
        User user = new User();
        user.setUsername("newuser");
        user.setPassword("password");

        when(userService.register("newuser", "password")).thenReturn(user);

        User result = authController.register(user);

        assertNotNull(result);
        assertEquals("newuser", result.getUsername());
    }

    @Test
    void testLogin() {
        User user = new User();
        user.setUsername("newuser");
        user.setPassword("password");

        when(userService.login("newuser", "password")).thenReturn(user);

        User result = authController.login(user);

        assertNotNull(result);
        assertEquals("newuser", result.getUsername());
    }
}
