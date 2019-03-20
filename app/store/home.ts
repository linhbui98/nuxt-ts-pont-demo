import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type Status = 'sold' | 'pending';
@Module({ name: 'home', stateFactory: true })
export default class extends VuexModule {
  pets: defs.petstore.Pet[] = [];
  currentStatus: Status = 'sold';

  @MutationAction
  async getPets(status: string) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status } as any);
    return {
      pets,
      currentStatus: status
    };
  }
}
