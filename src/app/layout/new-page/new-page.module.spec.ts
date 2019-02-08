import { NewPageModule } from './new-page.module';

describe('NewPageModule', () => {
    let NewPageModule: NewPageModule;

    beforeEach(() => {
        NewPageModule = new NewPageModule();
    });

    it('should create an instance', () => {
        expect(NewPageModule).toBeTruthy();
    });
});
